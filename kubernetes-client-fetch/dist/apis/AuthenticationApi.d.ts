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
import { V1APIGroup } from '../models';
/**
 *
 */
export declare class AuthenticationApi extends runtime.BaseAPI {
    /**
     * get information of a group
     */
    getAPIGroupRaw(): Promise<runtime.ApiResponse<V1APIGroup>>;
    /**
     * get information of a group
     */
    getAPIGroup(): Promise<V1APIGroup>;
}
