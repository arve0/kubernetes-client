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
exports.CoordinationV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class CoordinationV1Api extends runtime.BaseAPI {
    /**
     * create a Lease
     */
    createNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling createNamespacedLease.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createNamespacedLease.');
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1LeaseToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseFromJSON(jsonValue));
        });
    }
    /**
     * create a Lease
     */
    createNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete collection of Lease
     */
    deleteCollectionNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedLease.');
            }
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete collection of Lease
     */
    deleteCollectionNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCollectionNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * delete a Lease
     */
    deleteNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling deleteNamespacedLease.');
            }
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedLease.');
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1DeleteOptionsToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1StatusFromJSON(jsonValue));
        });
    }
    /**
     * delete a Lease
     */
    deleteNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteNamespacedLeaseRaw(requestParameters);
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
                path: `/apis/coordination.k8s.io/v1/`,
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
     * list or watch objects of kind Lease
     */
    listLeaseForAllNamespacesRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
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
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
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
                path: `/apis/coordination.k8s.io/v1/leases`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind Lease
     */
    listLeaseForAllNamespaces(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listLeaseForAllNamespacesRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * list or watch objects of kind Lease
     */
    listNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedLease.');
            }
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseListFromJSON(jsonValue));
        });
    }
    /**
     * list or watch objects of kind Lease
     */
    listNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * partially update the specified Lease
     */
    patchNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling patchNamespacedLease.');
            }
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedLease.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchNamespacedLease.');
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseFromJSON(jsonValue));
        });
    }
    /**
     * partially update the specified Lease
     */
    patchNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.patchNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * read the specified Lease
     */
    readNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling readNamespacedLease.');
            }
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling readNamespacedLease.');
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseFromJSON(jsonValue));
        });
    }
    /**
     * read the specified Lease
     */
    readNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * replace the specified Lease
     */
    replaceNamespacedLeaseRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling replaceNamespacedLease.');
            }
            if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
                throw new runtime.RequiredError('namespace', 'Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedLease.');
            }
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling replaceNamespacedLease.');
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
                path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1LeaseToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1LeaseFromJSON(jsonValue));
        });
    }
    /**
     * replace the specified Lease
     */
    replaceNamespacedLease(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.replaceNamespacedLeaseRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.CoordinationV1Api = CoordinationV1Api;