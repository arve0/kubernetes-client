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
exports.CertificatesV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class CertificatesV1Api extends runtime.BaseAPI {
    /**
     * create a CertificateSigningRequest
     */
    createCertificateSigningRequestRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createCertificateSigningRequest.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CertificateSigningRequestToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * create a CertificateSigningRequest
     */
    createCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete a CertificateSigningRequest
     */
    deleteCertificateSigningRequestRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteCertificateSigningRequest.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete a CertificateSigningRequest
     */
    deleteCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of CertificateSigningRequest
     */
    deleteCollectionCertificateSigningRequestRaw(requestParameters) {
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of CertificateSigningRequest
     */
    deleteCollectionCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionCertificateSigningRequestRaw(requestParameters);
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
                path: `/apis/certificates.k8s.io/v1/`,
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
     * list or watch objects of kind CertificateSigningRequest
     */
    listCertificateSigningRequestRaw(requestParameters) {
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind CertificateSigningRequest
     */
    listCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified CertificateSigningRequest
     */
    patchCertificateSigningRequestRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchCertificateSigningRequest.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchCertificateSigningRequest.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified CertificateSigningRequest
     */
    patchCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update approval of the specified CertificateSigningRequest
     */
    patchCertificateSigningRequestApprovalRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchCertificateSigningRequestApproval.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchCertificateSigningRequestApproval.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * partially update approval of the specified CertificateSigningRequest
     */
    patchCertificateSigningRequestApproval(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchCertificateSigningRequestApprovalRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update status of the specified CertificateSigningRequest
     */
    patchCertificateSigningRequestStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchCertificateSigningRequestStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchCertificateSigningRequestStatus.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * partially update status of the specified CertificateSigningRequest
     */
    patchCertificateSigningRequestStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchCertificateSigningRequestStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified CertificateSigningRequest
     */
    readCertificateSigningRequestRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readCertificateSigningRequest.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * read the specified CertificateSigningRequest
     */
    readCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read approval of the specified CertificateSigningRequest
     */
    readCertificateSigningRequestApprovalRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readCertificateSigningRequestApproval.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * read approval of the specified CertificateSigningRequest
     */
    readCertificateSigningRequestApproval(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readCertificateSigningRequestApprovalRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read status of the specified CertificateSigningRequest
     */
    readCertificateSigningRequestStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readCertificateSigningRequestStatus.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * read status of the specified CertificateSigningRequest
     */
    readCertificateSigningRequestStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readCertificateSigningRequestStatusRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequestRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequest.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequest.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CertificateSigningRequestToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequest(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceCertificateSigningRequestRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace approval of the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequestApprovalRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequestApproval.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequestApproval.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CertificateSigningRequestToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * replace approval of the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequestApproval(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceCertificateSigningRequestApprovalRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace status of the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequestStatusRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceCertificateSigningRequestStatus.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceCertificateSigningRequestStatus.');
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
                path: `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1CertificateSigningRequestToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1CertificateSigningRequestFromJSON(jsonValue));
        });
    }
    /**
     * replace status of the specified CertificateSigningRequest
     */
    replaceCertificateSigningRequestStatus(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceCertificateSigningRequestStatusRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.CertificatesV1Api = CertificatesV1Api;
