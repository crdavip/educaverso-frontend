export interface PayloadCourse {
  payload: UserCourse;
}

interface UserCourse {
  isProfileComplete: boolean;
  authSession: AuthSession;
}

interface AuthSession {
  identity: Identity;
  associatedIdentity: AssociatedIdentity;
  tokens: Tokens;
  failed: boolean;
}

interface Identity {
  id: number;
  email: string;
  phoneNumber?: number;
  dialCode?: string;
  isEnabled: boolean;
  hasAcceptedPolicy: boolean;
  roleId: number;
  roleName: string;
}

interface AssociatedIdentity {
  id: number;
  isEnabled: boolean;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface SessionValue {
  isLoggedIn: boolean;
  identity: Identity | null;
  associatedIdentity: AssociatedIdentity | null;
  tokens: Tokens | null;
}

export interface SessionState {
  session: {
    value: SessionValue;
    isLoading: boolean;
  };
  setSession: (payload: { identity: Identity; associatedIdentity: AssociatedIdentity; tokens: Tokens }) => void;
}
