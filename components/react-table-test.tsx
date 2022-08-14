import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
  {
    Header: "Rule",
    accessor: "ruler",
  },
  {
    Header: "Variety",
    accessor: "variety",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Obs Photo",
    accessor: "obs",
  },
  {
    Header: "Rev Photo",
    accessor: "rev",
  },
];

let data = [
  { ruler: "Test", obs: "test", rev: "test", variety: "test", type: "test" },
];

type Coin = {
  ruler: string;
  obs: string;
  rev: string;
  variety: string;
  type: string;
};

const columnHelper = createColumnHelper<Coin>();

const defaultColumns: ColumnDef<Coin>[] = [
  // Display Column
  // Grouping Column
  columnHelper.group({
    header: "Gupta",
    columns: [
      // Accessor Column
      columnHelper.accessor("ruler", {
        cell: (info) => info.getValue(),
        // footer: props => props.column.id,
      }),
      // Accessor Column
      // columnHelper.accessor('type', {
      //   id: '',
      //   cell: info => info.getValue(),
      //   header: () => <span>Last Name</span>,
      //   footer: props => props.column.id,
      // }),
    ],
  }),
];

const ReactTableTest = () => {
  // const table = useReactTable(options);

  return <div>Enter</div>;
};

export default ReactTableTest;
