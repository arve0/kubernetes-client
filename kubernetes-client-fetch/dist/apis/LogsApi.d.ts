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
import * as runtime from '../runtime';
export interface LogsApiLogFileHandlerRequest {
    logpath: string;
}
/**
 *
 */
export declare class LogsApi extends runtime.BaseAPI {
    /**
     */
    logFileHandlerRaw(requestParameters: LogsApiLogFileHandlerRequest): Promise<runtime.ApiResponse<void>>;
    /**
     */
    logFileHandler(requestParameters: LogsApiLogFileHandlerRequest): Promise<void>;
    /**
     */
    logFileListHandlerRaw(): Promise<runtime.ApiResponse<void>>;
    /**
     */
    logFileListHandler(): Promise<void>;
}