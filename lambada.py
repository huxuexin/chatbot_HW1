import json

def lambda_handler(event, context):
    # TODO implement
    if event["input"] == "hello":
        return {
            "statusCode": 200,
            "body": json.dumps('Nice to meet you')
            }
    elif event["input"] == "I could programming" :
        return {
            "statusCode": 200,
            "body": json.dumps('Awesome')
            }
    elif event["input"] == "bye":
        return {
            "statusCode": 200,
            "body": json.dumps('bye')
            }
    elif event["input"] == "I have an internship":
        return {
            "statusCode": 200,
            "body": json.dumps('That sounds Great!')
            }
    else :
        return {
            "statusCode": 200,
            "body": json.dumps('Interesting, But I cannot understand')
            }
    # return {
    #     "statusCode": 200,
    #     "body": json.dumps(event)
    # }
