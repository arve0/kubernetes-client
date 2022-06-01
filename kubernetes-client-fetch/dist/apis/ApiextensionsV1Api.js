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
exports.ApiextensionsV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class ApiextensionsV1Api extends runtime.BaseAPI {
    /**
     * create a CustomResourceDefinition
     */
    createCustomResourceDefinitionRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createCustomResourceDefinition.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CustomResourceDefinitionToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * create a CustomResourceDefinition
     */
    createCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of CustomResourceDefinition
     */
    deleteCollectionCustomResourceDefinitionRaw(requestParameters) {
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of CustomResourceDefinition
     */
    deleteCollectionCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete a CustomResourceDefinition
     */
    deleteCustomResourceDefinitionRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteCustomResourceDefinition.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete a CustomResourceDefinition
     */
    deleteCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCustomResourceDefinitionRaw(requestParameters);
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
                path: `/apis/apiextensions.k8s.io/v1/`,
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
     * list or watch objects of kind CustomResourceDefinition
     */
    listCustomResourceDefinitionRaw(requestParameters) {
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind CustomResourceDefinition
     */
    listCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified CustomResourceDefinition
     */
    patchCustomResourceDefinitionRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinition.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinition.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified CustomResourceDefinition
     */
    patchCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update status of the specified CustomResourceDefinition
     */
    patchCustomResourceDefinitionStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinitionStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinitionStatus.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * partially update status of the specified CustomResourceDefinition
     */
    patchCustomResourceDefinitionStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchCustomResourceDefinitionStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified CustomResourceDefinition
     */
    readCustomResourceDefinitionRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinition.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * read the specified CustomResourceDefinition
     */
    readCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read status of the specified CustomResourceDefinition
     */
    readCustomResourceDefinitionStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinitionStatus.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * read status of the specified CustomResourceDefinition
     */
    readCustomResourceDefinitionStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readCustomResourceDefinitionStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified CustomResourceDefinition
     */
    replaceCustomResourceDefinitionRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinition.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinition.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CustomResourceDefinitionToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified CustomResourceDefinition
     */
    replaceCustomResourceDefinition(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceCustomResourceDefinitionRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace status of the specified CustomResourceDefinition
     */
    replaceCustomResourceDefinitionStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinitionStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinitionStatus.');
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
                path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CustomResourceDefinitionToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CustomResourceDefinitionFromJSON(jsonValue));
        });
    }
    /**
     * replace status of the specified CustomResourceDefinition
     */
    replaceCustomResourceDefinitionStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceCustomResourceDefinitionStatusRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.ApiextensionsV1Api = ApiextensionsV1Api;
