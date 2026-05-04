import type { Order, OrderStatus } from '@/types/order'

const now = new Date()

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    customerId: 'CUS-001',
    customerName: 'Rafael Dias Zendron',
    customerPhone: '(11) 99999-1234',
    customerEmail: 'rafael.zendron22@gmail.com',
    status: 'pending',
    products: [
      { id: 'PRD-001', name: 'Pizza de Calabresa Família', quantity: 2, price: 49.9 },
      { id: 'PRD-002', name: 'Refrigerante 2L', quantity: 1, price: 5.0 },
    ],
    total: 104.8,
    createdAt: new Date(now.getTime() - 3 * 60000),
  },
  {
    id: 'ORD-002',
    customerId: 'CUS-002',
    customerName: 'Ana Carolina Silva',
    customerPhone: '(11) 98888-5678',
    customerEmail: 'ana.silva@email.com',
    status: 'processing',
    products: [
      { id: 'PRD-003', name: 'Pizza Marguerita Média', quantity: 1, price: 39.9 },
      { id: 'PRD-004', name: 'Suco Natural 500ml', quantity: 2, price: 8.5 },
    ],
    total: 56.9,
    createdAt: new Date(now.getTime() - 15 * 60000),
  },
  {
    id: 'ORD-003',
    customerId: 'CUS-003',
    customerName: 'Carlos Eduardo Santos',
    customerPhone: '(21) 97777-9012',
    customerEmail: 'carlos.santos@email.com',
    status: 'delivering',
    products: [
      { id: 'PRD-005', name: 'Pizza 4 Queijos Grande', quantity: 1, price: 59.9 },
      { id: 'PRD-006', name: 'Batata Frita 300g', quantity: 1, price: 15.0 },
      { id: 'PRD-007', name: 'Cerveja Artesanal 600ml', quantity: 2, price: 18.9 },
    ],
    total: 112.7,
    createdAt: new Date(now.getTime() - 45 * 60000),
  },
  {
    id: 'ORD-004',
    customerId: 'CUS-004',
    customerName: 'Juliana Ferreira Lima',
    customerPhone: '(31) 96666-3456',
    customerEmail: 'juliana.lima@email.com',
    status: 'delivered',
    products: [
      { id: 'PRD-008', name: 'Pizza Pepperoni Família', quantity: 1, price: 54.9 },
    ],
    total: 54.9,
    createdAt: new Date(now.getTime() - 2 * 3600000),
  },
  {
    id: 'ORD-005',
    customerId: 'CUS-005',
    customerName: 'Marcos Vinícius Costa',
    customerPhone: '(11) 95555-7890',
    customerEmail: 'marcos.costa@email.com',
    status: 'canceled',
    products: [
      { id: 'PRD-009', name: 'Pizza Mussarela Média', quantity: 3, price: 35.9 },
      { id: 'PRD-010', name: 'Refrigerante 2L', quantity: 2, price: 5.0 },
    ],
    total: 117.7,
    createdAt: new Date(now.getTime() - 3 * 3600000),
  },
  {
    id: 'ORD-006',
    customerId: 'CUS-006',
    customerName: 'Patrícia Oliveira Souza',
    customerPhone: '(41) 94444-2345',
    customerEmail: 'patricia.souza@email.com',
    status: 'pending',
    products: [
      { id: 'PRD-011', name: 'Pizza Portuguesa Grande', quantity: 1, price: 52.9 },
      { id: 'PRD-012', name: 'Açaí 500ml', quantity: 2, price: 22.0 },
    ],
    total: 96.9,
    createdAt: new Date(now.getTime() - 7 * 60000),
  },
  {
    id: 'ORD-007',
    customerId: 'CUS-007',
    customerName: 'Fernando Rocha Alves',
    customerPhone: '(51) 93333-6789',
    customerEmail: 'fernando.alves@email.com',
    status: 'processing',
    products: [
      { id: 'PRD-013', name: 'Pizza Frango com Catupiry Família', quantity: 1, price: 56.9 },
      { id: 'PRD-014', name: 'Guaraná Antárctica 2L', quantity: 1, price: 6.5 },
    ],
    total: 63.4,
    createdAt: new Date(now.getTime() - 22 * 60000),
  },
  {
    id: 'ORD-008',
    customerId: 'CUS-008',
    customerName: 'Beatriz Nascimento Martins',
    customerPhone: '(61) 92222-0123',
    customerEmail: 'beatriz.martins@email.com',
    status: 'delivered',
    products: [
      { id: 'PRD-015', name: 'Esfiha de Carne (unidade)', quantity: 10, price: 6.5 },
    ],
    total: 65.0,
    createdAt: new Date(now.getTime() - 5 * 3600000),
  },
  {
    id: 'ORD-009',
    customerId: 'CUS-009',
    customerName: 'Lucas Gabriel Pereira',
    customerPhone: '(71) 91111-4567',
    customerEmail: 'lucas.pereira@email.com',
    status: 'pending',
    products: [
      { id: 'PRD-016', name: 'Pizza Toscana Média', quantity: 2, price: 42.9 },
      { id: 'PRD-017', name: 'Coca-Cola 2L', quantity: 1, price: 8.0 },
    ],
    total: 93.8,
    createdAt: new Date(now.getTime() - 1 * 60000),
  },
  {
    id: 'ORD-010',
    customerId: 'CUS-010',
    customerName: 'Mariana Azevedo Barbosa',
    customerPhone: '(81) 90000-8901',
    customerEmail: 'mariana.barbosa@email.com',
    status: 'delivering',
    products: [
      { id: 'PRD-018', name: 'Pizza Napolitana Grande', quantity: 1, price: 49.9 },
      { id: 'PRD-019', name: 'Borda Recheada Catupiry', quantity: 1, price: 12.0 },
    ],
    total: 61.9,
    createdAt: new Date(now.getTime() - 35 * 60000),
  },
]

export function getNextStatusLabel(status: OrderStatus): string {
  switch (status) {
    case 'pending':
      return 'Aprovar'
    case 'processing':
      return 'Entregar'
    case 'delivering':
      return 'Concluir'
    default:
      return ''
  }
}
