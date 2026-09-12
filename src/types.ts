export type PluginAPI = {
  addUtilities(
    utilities: Record<string, any> | Record<string, any>[],
    options?: {},
  ): void;
  matchUtilities(
    utilities: Record<
      string,
      (value: string, extra: { modifier: string | null }) => any
    >,
    options?: {
      values?: Record<string, string>;
      type?: string | string[];
      supportsNegativeValues?: boolean;
    },
  ): void;
  theme(path: string, defaultValue?: any): any;
};
