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
exports.AuthenticationV1Api = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class AuthenticationV1Api extends runtime.BaseAPI {
    /**
     * create a TokenReview
     */
    createTokenReviewRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.body === null || requestParameters.body === undefined) {
                throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createTokenReview.');
            }
            const queryParameters = {};
            if (requestParameters.dryRun !== undefined) {
                queryParameters['dryRun'] = requestParameters.dryRun;
            }
            if (requestParameters.fieldManager !== undefined) {
                queryParameters['fieldManager'] = requestParameters.fieldManager;
            }
            if (requestParameters.fieldValidation !== undefined) {
                queryParameters['fieldValidation'] = requestParameters.fieldValidation;
            }
            if (requestParameters.pretty !== undefined) {
                queryParameters['pretty'] = requestParameters.pretty;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/apis/authentication.k8s.io/v1/tokenreviews`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.V1TokenReviewToJSON(requestParameters.body),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.V1TokenReviewFromJSON(jsonValue));
        });
    }
    /**
     * create a TokenReview
     */
    createTokenReview(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createTokenReviewRaw(requestParameters);
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
                path: `/apis/authentication.k8s.io/v1/`,
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
}
exports.AuthenticationV1Api = AuthenticationV1Api;