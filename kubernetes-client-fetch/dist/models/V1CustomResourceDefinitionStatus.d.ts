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
import { V1CustomResourceDefinitionCondition, V1CustomResourceDefinitionNames } from './';
/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 * @export
 * @interface V1CustomResourceDefinitionStatus
 */
export interface V1CustomResourceDefinitionStatus {
    /**
     *
     * @type {V1CustomResourceDefinitionNames}
     * @memberof V1CustomResourceDefinitionStatus
     */
    acceptedNames?: V1CustomResourceDefinitionNames;
    /**
     * conditions indicate state for particular aspects of a CustomResourceDefinition
     * @type {Array<V1CustomResourceDefinitionCondition>}
     * @memberof V1CustomResourceDefinitionStatus
     */
    conditions?: Array<V1CustomResourceDefinitionCondition>;
    /**
     * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
     * @type {Array<string>}
     * @memberof V1CustomResourceDefinitionStatus
     */
    storedVersions?: Array<string>;
}
export declare function V1CustomResourceDefinitionStatusFromJSON(json: any): V1CustomResourceDefinitionStatus;
export declare function V1CustomResourceDefinitionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceDefinitionStatus;
export declare function V1CustomResourceDefinitionStatusToJSON(value?: V1CustomResourceDefinitionStatus | null): any;