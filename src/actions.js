/**
 * Action method.
 *
 * @param {object} params - A map of all the parameters passed from the flow.
 * @param {object} options - The additional options provided from the flow
 *	 engine.
 * @param {object} options.pluginConfig - The service configuration for this
 *	 plugin from API Builder config.pluginConfig['api-builder-plugin-pluginName']
 * @param {object} options.logger - The API Builder logger which can be used
 *	 to log messages to the console. When run in unit-tests, the messages are
 *	 not logged.  If you wish to test logging, you will need to create a
 *	 mocked logger (e.g. using `simple-mock`) and override in
 *	 `MockRuntime.loadPlugin`.  For more information about the logger, see:
 *	 https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/logging.html
 * @param {*} [options.pluginContext] - The data provided by passing the
 *	 context to `sdk.load(file, actions, { pluginContext })` in `getPlugin`
 *	 in `index.js`.
 * @return {*} The response value (resolves to "next" output, or if the method
 *	 does not define "next", the first defined output).
 */
async function detectSentiment(params, options) {
	const { LanguageCode } = params;
  const { Text } = params;
	const { logger } = options;
  let _languageCode = 'en';

	if (!Text) {
		throw new Error('Missing required parameter: Text');
	}

  if(LanguageCode) {
    _languageCode = LanguageCode;
  }
  
  // Note that user must set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY env vars in their main API Builder project
  var AWS = require('aws-sdk');
  AWS.config.update({region: 'us-east-1'});
  var comprehend = new AWS.Comprehend();

  var cparams = {
    Text: Text,
    LanguageCode: _languageCode
  };

  comprehend.detectSentiment(cparams, function(err, data) {
    if(err) {
      throw new Error(err);
    } else {
      return data;
    }
  });

}

module.exports = {
	detectSentiment
};
