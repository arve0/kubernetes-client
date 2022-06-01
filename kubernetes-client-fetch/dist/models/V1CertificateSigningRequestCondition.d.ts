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
/**
 * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
 * @export
 * @interface V1CertificateSigningRequestCondition
 */
export interface V1CertificateSigningRequestCondition {
    /**
     * lastTransitionTime is the time the condition last transitioned from one status to another. If unset, when a new condition type is added or an existing condition's status is changed, the server defaults this to the current time.
     * @type {Date}
     * @memberof V1CertificateSigningRequestCondition
     */
    lastTransitionTime?: Date;
    /**
     * lastUpdateTime is the time of the last update to this condition
     * @type {Date}
     * @memberof V1CertificateSigningRequestCondition
     */
    lastUpdateTime?: Date;
    /**
     * message contains a human readable message with details about the request state
     * @type {string}
     * @memberof V1CertificateSigningRequestCondition
     */
    message?: string;
    /**
     * reason indicates a brief reason for the request state
     * @type {string}
     * @memberof V1CertificateSigningRequestCondition
     */
    reason?: string;
    /**
     * status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown".
     * @type {string}
     * @memberof V1CertificateSigningRequestCondition
     */
    status: string;
    /**
     * type of the condition. Known conditions are "Approved", "Denied", and "Failed".
     *
     * An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.
     *
     * A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.
     *
     * A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.
     *
     * Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.
     *
     * Only one condition of a given type is allowed.
     * @type {string}
     * @memberof V1CertificateSigningRequestCondition
     */
    type: string;
}
export declare function V1CertificateSigningRequestConditionFromJSON(json: any): V1CertificateSigningRequestCondition;
export declare function V1CertificateSigningRequestConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CertificateSigningRequestCondition;
export declare function V1CertificateSigningRequestConditionToJSON(value?: V1CertificateSigningRequestCondition | null): any;
