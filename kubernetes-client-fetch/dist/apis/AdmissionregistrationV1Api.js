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
exports.AdmissionregistrationV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class AdmissionregistrationV1Api extends runtime.BaseAPI {
    /**
     * create a MutatingWebhookConfiguration
     */
    createMutatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createMutatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1MutatingWebhookConfigurationToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1MutatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * create a MutatingWebhookConfiguration
     */
    createMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * create a ValidatingWebhookConfiguration
     */
    createValidatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createValidatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1ValidatingWebhookConfigurationToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1ValidatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * create a ValidatingWebhookConfiguration
     */
    createValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of MutatingWebhookConfiguration
     */
    deleteCollectionMutatingWebhookConfigurationRaw(requestParameters) {
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of MutatingWebhookConfiguration
     */
    deleteCollectionMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of ValidatingWebhookConfiguration
     */
    deleteCollectionValidatingWebhookConfigurationRaw(requestParameters) {
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of ValidatingWebhookConfiguration
     */
    deleteCollectionValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete a MutatingWebhookConfiguration
     */
    deleteMutatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteMutatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete a MutatingWebhookConfiguration
     */
    deleteMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete a ValidatingWebhookConfiguration
     */
    deleteValidatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteValidatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete a ValidatingWebhookConfiguration
     */
    deleteValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteValidatingWebhookConfigurationRaw(requestParameters);
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
                path: `/apis/admissionregistration.k8s.io/v1/`,
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
     * list or watch objects of kind MutatingWebhookConfiguration
     */
    listMutatingWebhookConfigurationRaw(requestParameters) {
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1MutatingWebhookConfigurationListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind MutatingWebhookConfiguration
     */
    listMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * list or watch objects of kind ValidatingWebhookConfiguration
     */
    listValidatingWebhookConfigurationRaw(requestParameters) {
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1ValidatingWebhookConfigurationListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind ValidatingWebhookConfiguration
     */
    listValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified MutatingWebhookConfiguration
     */
    patchMutatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchMutatingWebhookConfiguration.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchMutatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1MutatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified MutatingWebhookConfiguration
     */
    patchMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified ValidatingWebhookConfiguration
     */
    patchValidatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchValidatingWebhookConfiguration.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchValidatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1ValidatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified ValidatingWebhookConfiguration
     */
    patchValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified MutatingWebhookConfiguration
     */
    readMutatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readMutatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1MutatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * read the specified MutatingWebhookConfiguration
     */
    readMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified ValidatingWebhookConfiguration
     */
    readValidatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readValidatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1ValidatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * read the specified ValidatingWebhookConfiguration
     */
    readValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified MutatingWebhookConfiguration
     */
    replaceMutatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceMutatingWebhookConfiguration.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceMutatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1MutatingWebhookConfigurationToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1MutatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified MutatingWebhookConfiguration
     */
    replaceMutatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceMutatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified ValidatingWebhookConfiguration
     */
    replaceValidatingWebhookConfigurationRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceValidatingWebhookConfiguration.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceValidatingWebhookConfiguration.');
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
                path: `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1ValidatingWebhookConfigurationToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1ValidatingWebhookConfigurationFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified ValidatingWebhookConfiguration
     */
    replaceValidatingWebhookConfiguration(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceValidatingWebhookConfigurationRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.AdmissionregistrationV1Api = AdmissionregistrationV1Api;