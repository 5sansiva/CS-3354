// src/app/api/events/create/route.js
import pool from '../../../../../lib/db';

export async function POST(req) {
  const { title, description, start_time, end_time, is_recurring, recurrence_pattern, priority } = await req.json();

  try {
    const result = await pool.query(
      `INSERT INTO events (title, description, start_time, end_time, is_recurring, recurrence_pattern, priority)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, start_time, end_time, is_recurring, recurrence_pattern, priority]
    );
    return new Response(JSON.stringify(result.rows[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating event', details: error.message }), { status: 500 });
  }
}
