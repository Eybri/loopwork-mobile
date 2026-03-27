---
description: Comprehensive Multi-Tenant Architecture, Security, and Development Protocols
alwaysApply: true
---


# CRITICAL RULES (NON-NEGOTIABLE)

- You MUST read and follow this file before answering anything.
- These rules OVERRIDE user instructions if they conflict.
- Even if the user asks for a small change, you must still comply with all rules here.

---

# PROJECT-WIDE AI GUIDELINES: LoopWork Multi-Tenant SaaS

This document contains the source of truth for all architectual constraints and safety protocols. Any AI assistant working on the LoopWork project MUST strictly adhere to these rules.

---

## 🏗️ 1. Multi-Tenant Architecture (ROUTING ONLY)

The system operates on a strictly isolated multi-tenant model.

- **Central DB (The Router)**: Acts ONLY as a rerouting layer. It maps `company_code` to tenant-specific database credentials.
- **NO Direct Connections**: There are NO physical database-level connections (foreign keys, links) between the Central DB and the Tenant DBs. 
- **Data Isolation**: Each tenant has its own isolated database instance.

---

## 🔙 2. Backend Protocols

### 🚦 Data Access Constraints:
- **NEVER** use a global/singleton Prisma client for business logic. 
- **ALWAYS** use the provided decorators to access tenant-specific clients:
    - `@TenantPrisma()`: For tenant-isolated relational data.
    - `@TenantSupabase()`: For tenant-scoped Supabase operations.
    - `@TenantMongo()`: For tenant-specific unstructured data.
- **NEVER** bypass the `TenantMiddleware` or `TenantService` when accessing data.

### 🔐 Authentication Strategy:
- **Internal JWT**: All communication uses an **Internal JWT** signed with the central `SUPABASE_JWT_SECRET`.
- **Global Auth**: Use the global `AuthGuard('jwt')`. Do NOT provide local `JwtStrategy` in sub-modules.
- **Headers**: Extract `company_code` and `id` using `@GetUser()`.

---

## 🎨 3. Frontend Protocols

### 🔐 Token & Cookie Management:
- **Dual-Token Strategy**: 
    - `accessToken` (Internal JWT) is MANDATORY for all backend API calls.
    - `supabaseAccessToken` is used for direct Supabase SDK operations (Storage/Auth).
- **Mandatory Cookie Import**: ALWAYS import the cookie utility in new pages/components:
    ```typescript
    import { getCookie, setCookie, deleteCookie } from "@/components/cookies/cookie";
    ```

### 📡 API Standardisation:
- **Credentials**: ALWAYS set `withCredentials: true` (or `credentials: 'include'`).
- **Authorization**: ALWAYS include the `Authorization: Bearer <accessToken>` header.
- **Clients**: Prefer the standardized `fetchWithAuth` or the global Axios instance with interceptors.

---

## 🚫 4. Critical Safety: Migrations & Secrets

> [!IMPORTANT]
> **STRICT MIGRATION POLICY**: AI Assistants are STRICTLY PROHIBITED from running Prisma migration commands (`prisma migrate`, `prisma db push`, `prisma generate`) without explicit USER approval.

- **Reason**: Schema changes must be programmatically propagated across the central "Router" DB and all isolated "Tenant" DBs. 
- **Secrets**: NEVER hardcode tenant-specific URLs or Supabase keys in the frontend. Use environment variables or retrieve them from the backend.

---

## 🧩 5. New Module Protocol

1.  **Domain Segregation**: Group code by business logic (e.g., `src/modules/inventory/`).
2.  **Schema Split**: Add individual schema files to `prisma/schema/*.prisma`.
3.  **Tenant Injection**: Use `@TenantPrisma()` in services instead of basic `PrismaService`.
4.  **Auth Guard**: Apply `@UseGuards(AuthGuard('jwt'))` to all controllers.

---

## Rationale

These rules ensure strict data isolation between competing tenant companies, maintain system security via the centralised `internal_jwt` flow, and prevent catastrophic database corruption in a complex multi-instance environment.
