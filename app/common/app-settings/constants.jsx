
export const API_URLs = {
        SERVER_BASE_URL: "http://10.175.173.223/NYCDHS.LandlordPortal.Service/api", //-- for development
}

/**
 * Common constants used throughout the application
 */
export const Constants = {
    /**
     * Constants for messages.
     */
    messages: {
        loadingError: "Error occured in loading...",
        loadingMessage: "Loading Please wait...",
        appPayee:"Payee added successfully.",
        someErrorOccured:'Some error occured. Please enter valid data. '
    },
    selectedReportsTab: {
        add:'add',
        list:'list'
    },
    emptyString: "",
    pathNames: {
        add:'add',
        payee:"payee",
        home: "/",
        noMatch: "*"
    },
    payeeKeys:{add:'add',list:'list'},
    menuCategory:{"payee":"payee"},
    validation: {
        types: {
            success: {
                key: "Success",
                containerCSS: "validation_success",
                icon: "fa fa-check"
            },
            error: {
                key: "Error",
                containerCSS: "validation_error",
                icon: "fa fa-times-circle"
            },
            warning: {
                key: "Warning",
                containerCSS: "validation_warning",
                icon: "fa fa-warning"
            },
            info: {
                key: "Info",
                containerCSS: "validation_info",
                icon: "fa fa-info-circle"
            }
        },
        mainContainerCSS: "validation_container"
    }
};
