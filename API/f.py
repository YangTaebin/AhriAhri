from flask import Flask, render_template, redirect, url_for, request
import requests
import json
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/oauth')
def oauth():
    code = str(request.args.get('code'))
    url = "https://kauth.kakao.com/oauth/token"
    payload = "grant_type=authorization_code&client_id=936bf5b9518acf0fb6f1b88eb4d67f67&redirect_url=http%3A5000%2Foauth&code="+str(code)
    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
    }
    response = requests.request("POST", url, data=payload, headers = headers)
    access_token = json.loads(((response.text).encode('utf-8')))['access_token']
    return access_token

if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = "5000", debug = True)
