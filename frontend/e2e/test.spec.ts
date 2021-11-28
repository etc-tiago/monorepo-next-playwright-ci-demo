import { expect, test } from '@playwright/test';

test('Registro E2E Test', async ({ page }) => {
  await test.step('acessar a página de registro', async () => {
    await page.goto('http://localhost:3010/');
    const el = page.locator(`[data-at="home"] [data-at="title"]`);
    await expect(el).toBeVisible();
  });

  await test.step('avançar para a segunda etapa', async () => {
    await page.click('[data-at="home"] [data-btn="next-step"]');
  });

  await test.step(
    'verificar se o titulo da pagina de profissional-manager está visivel',
    async () => {
      const el = page.locator(
        '[data-at="pr-manager"] [data-at="title"]',
      );
      await expect(el).toBeVisible();
    },
  );
});
