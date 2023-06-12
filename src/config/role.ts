import { PermissionGroup } from 'src/models';

// define permissions
export enum Permission {
  // roles
  ROLE_GROUPS = 'roleGroups',
  CREATE_ROLE = 'createRole',
  SHOW_ROLE = 'showRole',
  EDIT_ROLE = 'updateRole',
  DELETE_ROLE = 'deleteRole',

  // users
  USER_GROUP = 'userGroup',
  SHOW_USER = 'showUser',
  EDIT_USER = 'editUser',
}

// All permission data
export const permissionGroups: PermissionGroup[] = [
  {
    group: { key: Permission.ROLE_GROUPS, name: 'Role Management' },
    permissions: [
      { key: Permission.CREATE_ROLE, name: 'Create Role' },
      { key: Permission.SHOW_ROLE, name: 'Show Role' },
      { key: Permission.EDIT_ROLE, name: 'Edit Role' },
      { key: Permission.DELETE_ROLE, name: 'Delete Role' },
    ]
  },
  {
    group: { key: 'userGroup', name: 'User Management' },
    permissions: [
      { key: Permission.SHOW_USER, name: 'Show user' },
      { key: Permission.EDIT_USER, name: 'Edit User' },
    ]
  }
];
