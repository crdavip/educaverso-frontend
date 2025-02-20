export type RequestResponse<PropName extends string, Payload> = {
  [K in PropName]: Payload
} & {
  isLoading: boolean
  isError: boolean
};

export type StrapiResponse<T> = {
  data: T
  meta: {
    pagination: {
      limit: number
      total: number
      start: number
    }
  }
}
