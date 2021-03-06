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
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 * @export
 * @interface V1ResourceQuotaStatus
 */
export interface V1ResourceQuotaStatus {
    /**
     * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceQuotaStatus
     */
    hard?: {
        [key: string]: string;
    };
    /**
     * Used is the current observed total usage of the resource in the namespace.
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceQuotaStatus
     */
    used?: {
        [key: string]: string;
    };
}
export declare function V1ResourceQuotaStatusFromJSON(json: any): V1ResourceQuotaStatus;
export declare function V1ResourceQuotaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuotaStatus;
export declare function V1ResourceQuotaStatusToJSON(value?: V1ResourceQuotaStatus | null): any;
