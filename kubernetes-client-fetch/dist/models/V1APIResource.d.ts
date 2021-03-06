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
 * APIResource specifies the name of a resource and whether it is namespaced.
 * @export
 * @interface V1APIResource
 */
export interface V1APIResource {
    /**
     * categories is a list of the grouped resources this resource belongs to (e.g. 'all')
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    categories?: Array<string>;
    /**
     * group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".
     * @type {string}
     * @memberof V1APIResource
     */
    group?: string;
    /**
     * kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
     * @type {string}
     * @memberof V1APIResource
     */
    kind: string;
    /**
     * name is the plural name of the resource.
     * @type {string}
     * @memberof V1APIResource
     */
    name: string;
    /**
     * namespaced indicates if a resource is namespaced or not.
     * @type {boolean}
     * @memberof V1APIResource
     */
    namespaced: boolean;
    /**
     * shortNames is a list of suggested short names of the resource.
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    shortNames?: Array<string>;
    /**
     * singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
     * @type {string}
     * @memberof V1APIResource
     */
    singularName: string;
    /**
     * The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.
     * @type {string}
     * @memberof V1APIResource
     */
    storageVersionHash?: string;
    /**
     * verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)
     * @type {Array<string>}
     * @memberof V1APIResource
     */
    verbs: Array<string>;
    /**
     * version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".
     * @type {string}
     * @memberof V1APIResource
     */
    version?: string;
}
export declare function V1APIResourceFromJSON(json: any): V1APIResource;
export declare function V1APIResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1APIResource;
export declare function V1APIResourceToJSON(value?: V1APIResource | null): any;
