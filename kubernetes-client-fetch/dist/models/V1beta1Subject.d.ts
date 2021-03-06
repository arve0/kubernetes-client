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
import { V1beta1GroupSubject, V1beta1ServiceAccountSubject, V1beta1UserSubject } from './';
/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 * @export
 * @interface V1beta1Subject
 */
export interface V1beta1Subject {
    /**
     *
     * @type {V1beta1GroupSubject}
     * @memberof V1beta1Subject
     */
    group?: V1beta1GroupSubject;
    /**
     * `kind` indicates which one of the other fields is non-empty. Required
     * @type {string}
     * @memberof V1beta1Subject
     */
    kind: string;
    /**
     *
     * @type {V1beta1ServiceAccountSubject}
     * @memberof V1beta1Subject
     */
    serviceAccount?: V1beta1ServiceAccountSubject;
    /**
     *
     * @type {V1beta1UserSubject}
     * @memberof V1beta1Subject
     */
    user?: V1beta1UserSubject;
}
export declare function V1beta1SubjectFromJSON(json: any): V1beta1Subject;
export declare function V1beta1SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Subject;
export declare function V1beta1SubjectToJSON(value?: V1beta1Subject | null): any;
