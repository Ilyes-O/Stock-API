from flask import Flask, Response, send_file, request
import helper

app = Flask(name)

@app.get("/")
def test_route():
    return "all good"

"""
GET [where your server is hosted]/stock/AAPL


"""

@app.get("/image/<something>")
def handle_image(something):
    print(something)
    args = request.args
    # helper.createGraph(args.get('comp'), args.get('year1'), args.get('month1'), args.get('day1'), args.get('year2'), args.get('month2'), args.get('day2'), args.get('option'))
    helper.createGraph(args.get('comp'), 2010, 1, 1, 2022, 12, 31, 'close')
    return send_file(args.get('comp') + 'Graph.png')

if name == "main":
    app.run()
