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
import { V1BoundObjectReference } from './';
/**
 * TokenRequestSpec contains client provided parameters of a token request.
 * @export
 * @interface V1TokenRequestSpec
 */
export interface V1TokenRequestSpec {
    /**
     * Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
     * @type {Array<string>}
     * @memberof V1TokenRequestSpec
     */
    audiences: Array<string>;
    /**
     *
     * @type {V1BoundObjectReference}
     * @memberof V1TokenRequestSpec
     */
    boundObjectRef?: V1BoundObjectReference;
    /**
     * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
     * @type {number}
     * @memberof V1TokenRequestSpec
     */
    expirationSeconds?: number;
}
export declare function V1TokenRequestSpecFromJSON(json: any): V1TokenRequestSpec;
export declare function V1TokenRequestSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenRequestSpec;
export declare function V1TokenRequestSpecToJSON(value?: V1TokenRequestSpec | null): any;
