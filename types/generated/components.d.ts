import type { Schema, Struct } from '@strapi/strapi';

export interface WorkProjectScope extends Struct.ComponentSchema {
  collectionName: 'components_work_project_scopes';
  info: {
    displayName: 'project_scope';
    icon: 'puzzle';
  };
  attributes: {
    scope_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'work.project-scope': WorkProjectScope;
    }
  }
}
