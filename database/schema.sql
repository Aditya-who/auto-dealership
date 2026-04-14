create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  password text not null,
  created_at timestamp default now()
);

create table cars (
  id uuid primary key default gen_random_uuid(),
  name text,
  type text,
  price numeric,
  description text,
  image_url text,
  model_3d_url text,
  created_at timestamp default now()
);

create table car_specs (
  id uuid primary key default gen_random_uuid(),
  car_id uuid references cars(id) on delete cascade,
  engine text,
  mileage text,
  power text,
  fuel text
);

create table car_colors (
  id uuid primary key default gen_random_uuid(),
  car_id uuid references cars(id) on delete cascade,
  color_name text,
  color_hex text
);

create index idx_car_type on cars(type);