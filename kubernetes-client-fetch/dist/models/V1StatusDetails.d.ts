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
import { V1StatusCause } from './';
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 * @export
 * @interface V1StatusDetails
 */
export interface V1StatusDetails {
    /**
     * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
     * @type {Array<V1StatusCause>}
     * @memberof V1StatusDetails
     */
    causes?: Array<V1StatusCause>;
    /**
     * The group attribute of the resource associated with the status StatusReason.
     * @type {string}
     * @memberof V1StatusDetails
     */
    group?: string;
    /**
     * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StatusDetails
     */
    kind?: string;
    /**
     * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
     * @type {string}
     * @memberof V1StatusDetails
     */
    name?: string;
    /**
     * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
     * @type {number}
     * @memberof V1StatusDetails
     */
    retryAfterSeconds?: number;
    /**
     * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     * @type {string}
     * @memberof V1StatusDetails
     */
    uid?: string;
}
export declare function V1StatusDetailsFromJSON(json: any): V1StatusDetails;
export declare function V1StatusDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatusDetails;
export declare function V1StatusDetailsToJSON(value?: V1StatusDetails | null): any;