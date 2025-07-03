import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Eye } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "2024-06-20", value: 16 },
  { date: "2024-06-21", value: 21 },
  { date: "2024-06-22", value: 17 },
  { date: "2024-06-23", value: 13 },
  { date: "2024-06-24", value: 15 },
  { date: "2024-06-25", value: 18 },
  { date: "2024-06-26", value: 20 },
  { date: "2024-06-27", value: 22 },
  { date: "2024-06-28", value: 19 },
  { date: "2024-06-29", value: 17 },
  { date: "2024-06-30", value: 21 },
  { date: "2024-07-01", value: 16 },
  { date: "2024-07-02", value: 18 },
  { date: "2024-07-03", value: 20 },
  { date: "2024-07-04", value: 22 },
  { date: "2024-07-05", value: 19 },
  { date: "2024-07-06", value: 17 },
  { date: "2024-07-07", value: 21 },
  { date: "2024-07-08", value: 23 },
  { date: "2024-07-09", value: 20 },
  { date: "2024-07-10", value: 18 },
];

export function MetricChartModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="secondary" radius="sm" onPress={onOpen}>
        <Eye /> Ver métricas
      </Button>

      <Modal
        isOpen={isOpen}
        placement="center"
        size="4xl"
        onClose={onOpenChange}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Métricas
              </ModalHeader>
              <ModalBody className="max-h-[80vh] overflow-y-auto">
                <div>
                  <h2 className="mb-4 text-center text-xl font-semibold">
                    Quantidade de adição de produtos por data
                  </h2>

                  <div className="mx-auto w-full max-w-[800px]">
                    <ResponsiveContainer height={300} width="100%">
                      <LineChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                      >
                        <CartesianGrid stroke="#ccc" />
                        <XAxis
                          dataKey="date"
                          label={{
                            value: "Data",
                            position: "insideBottomCenter",
                            dy: 20,
                          }}
                          tickFormatter={(date: string) => {
                            const d = new Date(date);
                            const day = String(d.getDate()).padStart(2, "0");
                            const month = String(d.getMonth() + 1).padStart(
                              2,
                              "0",
                            );
                            const year = d.getFullYear();

                            return `${day}/${month}/${year}`;
                          }}
                        />
                        <YAxis
                          label={{
                            value: "Quantidade",
                            angle: -90,
                            position: "insideLeftCenter",
                            dx: -12,
                          }}
                        />
                        <Tooltip
                          formatter={(value: number) => [
                            `Quantidade: ${value}`,
                            "",
                          ]}
                        />
                        <Line
                          dataKey="value"
                          stroke="#8884d8"
                          type="monotone"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
