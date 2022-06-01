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
/**
 *
 */
export declare class OpenidApi extends runtime.BaseAPI {
    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     */
    getServiceAccountIssuerOpenIDKeysetRaw(): Promise<runtime.ApiResponse<string>>;
    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     */
    getServiceAccountIssuerOpenIDKeyset(): Promise<string>;
}
