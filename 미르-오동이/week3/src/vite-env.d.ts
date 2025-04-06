/// <reference types="vite/client" />

// 환경변수 설정
interface importMetaEnv{
    readonly VITE_TMDB_KEY: string;
}

interface importMeta{
    readonly env: importMetaEnv;
}