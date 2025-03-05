import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <h1>Database</h1>
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseVersionText = "Carregando...";
  let databaseOpendedConnectionsText = "Carregando...";
  let databaseMaxConnectionsText = "Carregando...";

  if (!isLoading && data) {
    databaseVersionText = data.dependencies.database.version;
    databaseOpendedConnectionsText =
      data.dependencies.database.opended_connections;
    databaseMaxConnectionsText = data.dependencies.database.max_connections;
  }
  return (
    <>
      <div>
        <p>Versão: {databaseVersionText}</p>
        <p>Conexões abertas: {databaseOpendedConnectionsText}</p>
        <p>Conexões máximas: {databaseMaxConnectionsText}</p>
      </div>
    </>
  );
}
