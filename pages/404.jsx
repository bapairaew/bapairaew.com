import { NextSeo } from "next-seo";
import Link from "next/link";
import { Heading, Text, Flex, Container, Link as A, Button } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";

export default function NotFound() {
  return (
    <>
      <NextSeo
        noindex={true}
        title="Page not found | Narudom"
        openGraph={{
          title: "Page not found | Narudom",
          site_name: "Narudom",
        }}
      />
      <Flex sx={{ minHeight: "100vh", flexDirection: "column" }}>
        <Header />
        <Container
          variant="layout.text"
          sx={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Heading as="h1" variant="display">
            Page not found
          </Heading>
          <Text as="p" my={3}>
            Well, this URL seems wrong. Either it has already been changed or it
            is misspelt. If you are still not sure what is wrong maybe try to
            find the page from the start.
          </Text>
          <Link href="/" passHref>
            <A>
              <Button>Return home</Button>
            </A>
          </Link>
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
