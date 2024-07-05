/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

interface MSSQLOptions {
  encrypt?: boolean;
  trustServerCertificate?: boolean;
  instanceName?: string;
}

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | OracleDB config
    |--------------------------------------------------------------------------
    |
    | Configuration for Oracle database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i oracledb
    |
    */
    oracle: {
      client: 'oracledb',
      connection: {
        host: Env.get('ORACLE_HOST'),
        port: Env.get('ORACLE_PORT'),
        connectString: Env.get('ORACLE_DB_NAME'),
        user: Env.get('ORACLE_USER'),
        password: Env.get('ORACLE_PASSWORD', ''),
        //database: Env.get('ORACLE_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },

    /*
    |--------------------------------------------------------------------------
    | MSSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MSSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i tedious
    |
    */
    mssql: {
      client: 'mssql',
      connection: {
        server: Env.get('MSSQL_SERVER'),
        port: parseInt(Env.get('MSSQL_PORT')),
        user: Env.get('MSSQL_USER'),
        password: Env.get('MSSQL_PASSWORD'),
        database: Env.get('MSSQL_DB_NAME'),
        /* options: {
          instanceName: 'PROD01', 
          encrypt: false, 
        } as MSSQLOptions, */
      },
      healthCheck: false,
      debug: false,
    }
  }
}

export default databaseConfig
