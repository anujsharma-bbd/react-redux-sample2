import fetch from "isomorphic-fetch";

import { API_URLs, Constants } from "../../../common/app-settings/constants";

/**
 * Set the request body and headers.
 */
var CommonService = {

  /**
  * Set the content type for graphQL.
  */
  getHeaders: function () {
    return { "content-type": "application/json" };
  },
  /**
    * Ajax call to the graphQL endpoint.
    */
  sendRequest: function (body, action, type) {
    let request = {
      method: type,
      body: body,
      headers: this.getHeaders()
    };
    if (type == "GET") {
      delete request.body;
    }
    return fetch(API_URLs.SERVER_BASE_URL + action,
      request)
      .then(response => {
        if (!response.ok)
          throw Error(response.statusText);

        return response.json();
      });
  },
  renderError: function (errorResponse) {
    console.log("Error :: ", errorResponse);
  }

}

exports.CommonService = CommonService;