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
exports.LogsApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class LogsApi extends runtime.BaseAPI {
    /**
     */
    logFileHandlerRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.logpath === null || requestParameters.logpath === undefined) {
                throw new runtime.RequiredError('logpath', 'Required parameter requestParameters.logpath was null or undefined when calling logFileHandler.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/logs/{logpath}`.replace(`{${"logpath"}}`, encodeURIComponent(String(requestParameters.logpath))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    logFileHandler(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logFileHandlerRaw(requestParameters);
        });
    }
    /**
     */
    logFileListHandlerRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
            }
            const response = yield this.request({
                path: `/logs/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    logFileListHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logFileListHandlerRaw();
        });
    }
}
exports.LogsApi = LogsApi;
