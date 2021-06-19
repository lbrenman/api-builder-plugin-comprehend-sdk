# API Builder Plugin for AWS Comprehend for NLP

[**Axway API Builder**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html) flow-node that implements [**AWS Comprehend**](https://docs.aws.amazon.com/comprehend/index.html) for Natural Language Processing ([**NLP**](https://en.wikipedia.org/wiki/Natural_language_processing)): *api-builder-plugin-comprehend-sdk*.

## About flow-nodes

Flow-nodes are used within Axway API Builder's flow editor that is a low-code / no-code solution to designing and developing services
that integrate to many different connected components, such as databases and APIs.

## Install

After creating your [**API Builder Project**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html), you can install this plugin using npm:

```
npm install api-builder-plugin-comprehend-sdk
```

> Note that this command will install from npm. If you want to install locally, then provide the full path to the plugin folder

Before launching your API Builder app that uses this plugin, you must set the following two environment variables as per the [**AWS SDK for JavaScript online docs**](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html):

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

## Use

Find the plugin in the NLP group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input Text and wire up to the rest of your flow as shown below:

![](https://i.imgur.com/TgFdvHk.png)

## Methods

The currently implemented methods are described below.

### detectSentiment

AWS docs are [**here**](https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html)

Provide the *Text* input and the optional *LanguageCode* and the output will be similar to below:

Text = "Today is my birthday, I am so happy."

```
{
    "SentimentScore": {
        "Mixed": 0.0033542951568961143,
        "Positive": 0.9869875907897949,
        "Neutral": 0.008563132025301456,
        "Negative": 0.0010949420975521207
    },
    "Sentiment": "POSITIVE",
 }   
}
```

### detectDominantLanguage

AWS docs are [**here**](https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html)

Provide the *Text* input and the output will be similar to below:

Text = "Bob lives in Seattle. He is a software engineer at Amazon."

```
{
    "Languages": [
        {
            "LanguageCode": "en",
            "Score": 0.9774383902549744
        },
        {
            "LanguageCode": "de",
            "Score": 0.010717987082898617
        }
    ]
}
```

### detectPiiEntities

AWS docs are [**here**](https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html)

Provide the *Text* input and the optional *LanguageCode* and the output will be similar to below:

Text = "Hello Paulo Santos. The latest statement for your credit card account 1111-0000-1111-0000 was mailed to 123 Any Street, Seattle, WA 98109."

```
{
    "Entities": [
        {
            "Score": 0.9999669790267944,
            "Type": "NAME",
            "BeginOffset": 6,
            "EndOffset": 18
        },
        {
            "Score": 0.8905550241470337,
            "Type": "CREDIT_DEBIT_NUMBER",
            "BeginOffset": 69,
            "EndOffset": 88
        },
        {
            "Score": 0.9999889731407166,
            "Type": "ADDRESS",
            "BeginOffset": 103,
            "EndOffset": 138
        }
    ]
}
```
