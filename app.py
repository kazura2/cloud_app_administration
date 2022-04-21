from typing import Counter
from xmlrpc.client import ResponseError
from flask import Flask, render_template, Response
import prometheus_client
from prometheus_client import Summary, Counter, Histogram, Gauge, CollectorRegistry
import time

app = Flask(__name__)

graphs = {}
graphs['counter'] = Counter('python_request_operations_total', 'The total number of processed requests')
graphs["histogram"] = Histogram('python_request_duration_seconds', 'Histogram for the duration in seconds', buckets=(1,2,5,6,10, float("inf")))



@app.route("/")
def calculator():
    start = time.time()
    graphs['counter'].inc()
    time.sleep(0.5)
    end = time.time()
    graphs['histogram'].observe(end - start)
    return render_template('calculator.html')

@app.route("/metrics")
def metrics():
    res = []
    for i,j in graphs.items():
        res.append(prometheus_client.generate_latest(j))
    return Response(res, mimetype="text/plain")



if __name__ == '__main__':
    app.run(debug = True)