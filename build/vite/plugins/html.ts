import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * createHtmlPlugin 配置
 * https://github.com/vbenjs/vite-plugin-html
 */
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_APP_TITLE } = env;

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE
      }
    }
  });
  return htmlPlugin;
}
