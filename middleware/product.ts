export default defineNuxtRouteMiddleware(() => {
  const { selectedProduct } = useProducts();
  if (!selectedProduct.value) return navigateTo("/");
});
