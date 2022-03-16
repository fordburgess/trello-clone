const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'trello-clone1.hasura.app'

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const authClientId = process.env.AUTH0_CLIENT_ID;
export const authDomain = process.env.AUTH0_DOMAIN;
export const callbackUrl = `http://localhost:3000`
