from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
import datetime
import json
import os

website_bp = Blueprint('website', __name__)

# Contact form submission
@website_bp.route('/contact', methods=['POST'])
@cross_origin()
def submit_contact_form():
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Create contact submission record
        contact_data = {
            'name': data['name'],
            'email': data['email'],
            'subject': data.get('subject', ''),
            'message': data['message'],
            'timestamp': datetime.datetime.now().isoformat(),
            'status': 'new'
        }
        
        # Save to file (in production, this would go to a database)
        contacts_file = os.path.join(os.path.dirname(__file__), '..', 'database', 'contacts.json')
        
        # Load existing contacts
        contacts = []
        if os.path.exists(contacts_file):
            try:
                with open(contacts_file, 'r') as f:
                    contacts = json.load(f)
            except:
                contacts = []
        
        # Add new contact
        contacts.append(contact_data)
        
        # Save back to file
        os.makedirs(os.path.dirname(contacts_file), exist_ok=True)
        with open(contacts_file, 'w') as f:
            json.dump(contacts, f, indent=2)
        
        return jsonify({'message': 'Contact form submitted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

# Search functionality
@website_bp.route('/search', methods=['GET'])
@cross_origin()
def search_content():
    try:
        query = request.args.get('q', '').lower()
        category = request.args.get('category', 'all').lower()
        
        if not query:
            return jsonify({'results': []}), 200
        
        # Mock search results (in production, this would search a database)
        all_content = [
            {
                'id': 1,
                'title': 'Food Processing Solutions',
                'content': 'Complete industrial lines for dairy, meat, beverages, and food packaging',
                'type': 'service',
                'category': 'food',
                'url': '/services#food-processing'
            },
            {
                'id': 2,
                'title': 'Agricultural Projects',
                'content': 'Grain handling, oilseed processing, livestock infrastructure',
                'type': 'service',
                'category': 'agriculture',
                'url': '/services#agriculture'
            },
            {
                'id': 3,
                'title': 'Industrial Engineering',
                'content': 'Custom engineering solutions and consulting',
                'type': 'service',
                'category': 'engineering',
                'url': '/services#engineering'
            },
            {
                'id': 4,
                'title': 'About Dorostol Trade',
                'content': 'Romanian-Bulgarian company specializing in engineering and industrial solutions',
                'type': 'page',
                'category': 'company',
                'url': '/about'
            },
            {
                'id': 5,
                'title': 'Our Mission and Vision',
                'content': 'Delivering innovative industrial solutions for F&B and Agriculture',
                'type': 'page',
                'category': 'company',
                'url': '/about#mission'
            }
        ]
        
        # Filter by search query
        results = []
        for item in all_content:
            if (query in item['title'].lower() or 
                query in item['content'].lower()):
                
                # Filter by category if specified
                if category == 'all' or category == item['category']:
                    results.append(item)
        
        return jsonify({'results': results[:10]}), 200  # Limit to 10 results
        
    except Exception as e:
        return jsonify({'error': 'Search failed'}), 500

# Get blog articles (placeholder)
@website_bp.route('/blog', methods=['GET'])
@cross_origin()
def get_blog_articles():
    try:
        category = request.args.get('category', 'all').lower()
        
        # Mock blog articles (in production, this would come from a database)
        articles = [
            {
                'id': 1,
                'title': 'The Future of Food Processing: Automation and Sustainability',
                'excerpt': 'Exploring how modern automation technologies are revolutionizing food processing',
                'category': 'food',
                'author': 'Dorostol Trade Team',
                'date': '2024-01-15',
                'readTime': '5 min read',
                'status': 'coming-soon',
                'tags': ['Automation', 'Sustainability', 'Food Processing']
            },
            {
                'id': 2,
                'title': 'Precision Agriculture: Technology Transforming Farming',
                'excerpt': 'How IoT sensors, drones, and data analytics are enabling farmers to optimize crop yields',
                'category': 'agriculture',
                'author': 'Dorostol Trade Team',
                'date': '2024-01-10',
                'readTime': '7 min read',
                'status': 'coming-soon',
                'tags': ['Precision Agriculture', 'IoT', 'Data Analytics']
            },
            {
                'id': 3,
                'title': 'Industrial Engineering Best Practices for F&B Facilities',
                'excerpt': 'Key considerations for designing efficient and compliant food processing facilities',
                'category': 'engineering',
                'author': 'Dorostol Trade Team',
                'date': '2024-01-05',
                'readTime': '6 min read',
                'status': 'coming-soon',
                'tags': ['Industrial Design', 'F&B', 'Compliance']
            },
            {
                'id': 4,
                'title': 'Strategic Consulting for Agricultural Modernization',
                'excerpt': 'How strategic consulting can help agricultural businesses navigate modernization',
                'category': 'consulting',
                'author': 'Dorostol Trade Team',
                'date': '2024-01-01',
                'readTime': '4 min read',
                'status': 'coming-soon',
                'tags': ['Strategy', 'Digital Transformation', 'Agriculture']
            }
        ]
        
        # Filter by category if specified
        if category != 'all':
            articles = [article for article in articles if article['category'] == category]
        
        return jsonify({'articles': articles}), 200
        
    except Exception as e:
        return jsonify({'error': 'Failed to fetch articles'}), 500

# Newsletter subscription
@website_bp.route('/newsletter', methods=['POST'])
@cross_origin()
def subscribe_newsletter():
    try:
        data = request.json
        email = data.get('email')
        
        if not email:
            return jsonify({'error': 'Email is required'}), 400
        
        # Validate email format (basic validation)
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Save subscription (in production, this would go to a database)
        subscription_data = {
            'email': email,
            'timestamp': datetime.datetime.now().isoformat(),
            'status': 'active'
        }
        
        subscriptions_file = os.path.join(os.path.dirname(__file__), '..', 'database', 'subscriptions.json')
        
        # Load existing subscriptions
        subscriptions = []
        if os.path.exists(subscriptions_file):
            try:
                with open(subscriptions_file, 'r') as f:
                    subscriptions = json.load(f)
            except:
                subscriptions = []
        
        # Check if email already exists
        for sub in subscriptions:
            if sub['email'] == email:
                return jsonify({'message': 'Email already subscribed'}), 200
        
        # Add new subscription
        subscriptions.append(subscription_data)
        
        # Save back to file
        os.makedirs(os.path.dirname(subscriptions_file), exist_ok=True)
        with open(subscriptions_file, 'w') as f:
            json.dump(subscriptions, f, indent=2)
        
        return jsonify({'message': 'Successfully subscribed to newsletter'}), 200
        
    except Exception as e:
        return jsonify({'error': 'Subscription failed'}), 500

# Get company information
@website_bp.route('/company-info', methods=['GET'])
@cross_origin()
def get_company_info():
    try:
        company_info = {
            'name': 'Dorostol Trade SRL',
            'description': 'Expert engineering, industrial, and trading solutions for the Food & Beverage and Agriculture sectors in Romania & Bulgaria.',
            'founded': '2010',
            'employees': '50+',
            'projects_completed': '500+',
            'countries_served': '50+',
            'offices': [
                {
                    'country': 'Bulgaria',
                    'city': '[City to be provided]',
                    'address': '[Address to be provided]',
                    'phone': '[Phone to be provided]',
                    'email': 'bulgaria@dorostol.trade'
                },
                {
                    'country': 'Romania',
                    'city': '[City to be provided]',
                    'address': '[Address to be provided]',
                    'phone': '[Phone to be provided]',
                    'email': 'romania@dorostol.trade'
                }
            ],
            'social_media': {
                'linkedin': 'https://linkedin.com/company/dorostol-trade',
                'facebook': 'https://facebook.com/dorostoltrade'
            }
        }
        
        return jsonify(company_info), 200
        
    except Exception as e:
        return jsonify({'error': 'Failed to fetch company information'}), 500

