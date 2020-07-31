define({ "api": [
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n   \"email\": \"\"\n     \"password\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/user/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/UserController.ts",
    "groupTitle": "Authentication",
    "name": "PostApiUserLogin"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "Register",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pinCode",
            "description": "<p>pinCode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "doorNo",
            "description": "<p>doorNo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>companyName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minOffPeak",
            "description": "<p>minOffPeak</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minHrPeak",
            "description": "<p>minHrPeak</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minHrXmas",
            "description": "<p>minHrXmas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>remarks</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options",
            "description": "<p>options</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "privateArea",
            "description": "<p>privateArea</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"firstName\": \"\"\n     \"lastName\": \"\"\n      \"options\": \"\"\n      \"companyName\": \"\"\n      \"minOffPeak\": \"\"\n     \"minHrPeak\": \"\"\n      \"minHrXmas\": \"\"\n        \"remarks\" : \"\"\n      \"options\": \"\"\n   \"privateArea\": \"[{\n          \"noOfRoom\": \"\"\n           \"noOfSeats\": \"\"\n             \"areaName\": \"\"\n}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/user/register"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/UserController.ts",
    "groupTitle": "Authentication",
    "name": "PostApiUserRegister"
  },
  {
    "type": "get",
    "url": "/api/option/list",
    "title": "Options List",
    "group": "Option",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>offset</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": " {\n     \"limit\": \"\"\n     \"offset\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/option/list"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/OptionController.ts",
    "groupTitle": "Option",
    "name": "GetApiOptionList"
  },
  {
    "type": "delete",
    "url": "/api/user/delete-user/:userId",
    "title": "Delete User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/user/delete-user/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/UserController.ts",
    "groupTitle": "User",
    "name": "DeleteApiUserDeleteUserUserid"
  },
  {
    "type": "get",
    "url": "/api/user/user-details/:userId",
    "title": "User Detail",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/user/user-detail/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/UserController.ts",
    "groupTitle": "User",
    "name": "GetApiUserUserDetailsUserid"
  },
  {
    "type": "get",
    "url": "/api/user/user-list",
    "title": "User List",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>offet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"limit\": \"\"\n  \"offset\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n    {\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://15.207.16.184/backend/api/user/user-list"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/UserController.ts",
    "groupTitle": "User",
    "name": "GetApiUserUserList"
  }
] });
