import { gql, useLazyQuery } from "@apollo/client";
import {
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Wrap,
  Text,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";

type PresentationData = {
  Title: string;
  File: any;
  Date: Date;
  Class: string;
  Hour: number;
};

const MaterialContent = ({ range, trida }) => {
  const REQUEST_DATA = gql`
    query getPresentations {
      presentations(filters: { Class: { containsi: "${trida}" } }) {
        data {
          attributes {
            Title
            Date
            Hour
            File {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const [requestData, { loading, data }] = useLazyQuery(REQUEST_DATA);

  useEffect(() => {
    requestData();
  }, [range]);

  //zpracovat data z requestu na backend
  if (data) {
    const rangeOfHours = range.split("-");
    const presentations = data.presentations.data.filter((presentation) => {
      if (
        presentation.attributes.Hour >= rangeOfHours[0] &&
        presentation.attributes.Hour <= rangeOfHours[1]
      ) {
        return presentation;
      }
    });
    console.log(presentations);
    return (
      <>
        {loading && <Spinner />}
        <Wrap w="70em" h="100%" p="8">
          {presentations.map((presentation) => {
            const presentationData: PresentationData = presentation.attributes;
            const presentationUrl =
              "http://127.0.0.1:1337" +
              presentationData.File.data.attributes.url;
            return (
              <Card>
                <CardBody>
                  <Stack spacing="3">
                    <Heading size="md">{presentationData.Title}</Heading>
                    <Text>
                      Hodina: <br />
                      <Text as={"span"} color="blue.600" fontSize="2xl">
                        {presentationData.Hour}
                      </Text>
                    </Text>
                    <Button variant="solid" colorScheme="blue">
                      <a href={presentationUrl}>Stáhnout</a>
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Wrap>
      </>
    );
  }
};

export default MaterialContent;
