import { InferGetServerSidePropsType, NextPage } from "next";
import { CheckoutScreen } from "../../page-components/CheckoutScreen";
import { GetServerSideProps } from "next";
import { fetchGetProducts } from "../../api";
import { store } from "../../store/store";

const CheckoutPage: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CheckoutScreen products={products} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchGetProducts();
  return { props: { products } };
};

export default CheckoutPage;
