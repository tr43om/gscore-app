import {
  InferGetServerSidePropsType,
  NextPage,
  GetServerSideProps,
} from "next";

import { fetchGetProducts } from "../../api";
import { CheckoutScreen } from "../../page-components";

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
