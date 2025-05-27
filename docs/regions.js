/**
 * @swagger
 * /regions:
 *   get:
 *     summary: Get all regions
 *     description: Retrieve a list of all available regions.
 *     responses:
 *       200:
 *         description: A list of regions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "66508c285d3db5cf82f84ac2"
 *                   region:
 *                     type: string
 *                     example: "Europe"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-05-25T12:00:00.000Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-05-25T12:00:00.000Z"
 */
