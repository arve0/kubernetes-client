"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiregistrationV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class ApiregistrationV1Api extends runtime.BaseAPI {
    /**
     * create an APIService
     */
    createAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createAPIService.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1APIServiceToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * create an APIService
     */
    createAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete an APIService
     */
    deleteAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteAPIService.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.gracePeriodSeconds !== undefined) {
                queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
            }
            if (requestParameters.orphanDependents !== undefined) {
                queryParameters['orphanDependents'] = requestParameters.orphanDependents;
            }
            if (requestParameters.propagationPolicy !== undefined) {
                queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete an APIService
     */
    deleteAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of APIService
     */
    deleteCollectionAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters._continue !== undefined) {
                queryParameters['continue'] = requestParameters._continue;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldSelector !== undefined) {
                queryParameters['fieldSelector'] = requestParameters.fieldSelector;
            }
            if (requestParameters.gracePeriodSeconds !== undefined) {
                queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
            }
            if (requestParameters.labelSelector !== undefined) {
                queryParameters['labelSelector'] = requestParameters.labelSelector;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.orphanDependents !== undefined) {
                queryParameters['orphanDependents'] = requestParameters.orphanDependents;
            }
            if (requestParameters.propagationPolicy !== undefined) {
                queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
            }
            if (requestParameters.resourceVersion !== undefined) {
                queryParameters['resourceVersion'] = requestParameters.resourceVersion;
            }
            if (requestParameters.resourceVersionMatch !== undefined) {
                queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
            }
            if (requestParameters.timeoutSeconds !== undefined) {
                queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of APIService
     */
    deleteCollectionAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * get available resources
     */
    getAPIResourcesRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIResourceListFromJSON(jsonValue));
        });
    }
    /**
     * get available resources
     */
    getAPIResources() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAPIResourcesRaw();
            return yield response.value();
        });
    }
    /**
     * list or watch objects of kind APIService
     */
    listAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.allowWatchBookmarks !== undefined) {
                queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
            }
            if (requestParameters._continue !== undefined) {
                queryParameters['continue'] = requestParameters._continue;
            }
            if (requestParameters.fieldSelector !== undefined) {
                queryParameters['fieldSelector'] = requestParameters.fieldSelector;
            }
            if (requestParameters.labelSelector !== undefined) {
                queryParameters['labelSelector'] = requestParameters.labelSelector;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.resourceVersion !== undefined) {
                queryParameters['resourceVersion'] = requestParameters.resourceVersion;
            }
            if (requestParameters.resourceVersionMatch !== undefined) {
                queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
            }
            if (requestParameters.timeoutSeconds !== undefined) {
                queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
            }
            if (requestParameters.watch !== undefined) {
                queryParameters['watch'] = requestParameters.watch;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind APIService
     */
    listAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified APIService
     */
    patchAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchAPIService.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchAPIService.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            if (requestParameters.force !== undefined) {
                queryParameters['force'] = requestParameters.force;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json-patch+json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified APIService
     */
    patchAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update status of the specified APIService
     */
    patchAPIServiceStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchAPIServiceStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchAPIServiceStatus.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            if (requestParameters.force !== undefined) {
                queryParameters['force'] = requestParameters.force;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json-patch+json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * partially update status of the specified APIService
     */
    patchAPIServiceStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchAPIServiceStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified APIService
     */
    readAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readAPIService.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * read the specified APIService
     */
    readAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read status of the specified APIService
     */
    readAPIServiceStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readAPIServiceStatus.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * read status of the specified APIService
     */
    readAPIServiceStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readAPIServiceStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified APIService
     */
    replaceAPIServiceRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceAPIService.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceAPIService.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1APIServiceToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified APIService
     */
    replaceAPIService(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceAPIServiceRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace status of the specified APIService
     */
    replaceAPIServiceStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceAPIServiceStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceAPIServiceStatus.');
            }
            const queryParameters = {};
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1APIServiceToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1APIServiceFromJSON(jsonValue));
        });
    }
    /**
     * replace status of the specified APIService
     */
    replaceAPIServiceStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceAPIServiceStatusRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.ApiregistrationV1Api = ApiregistrationV1Api;