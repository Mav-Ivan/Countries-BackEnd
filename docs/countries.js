/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get paginated countries list
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by country name
 *       - in: query
 *         name: region
 *         schema:
 *           type: string
 *         description: Filter by region name
 *     responses:
 *       200:
 *         description: Paginated list of countries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     required:
 *                       - name
 *                       - alpha2Code
 *                       - alpha3Code
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "66508c285d3db5cf82f84acd"
 *                       name:
 *                         type: string
 *                         example: "France"
 *                       topLevelDomain:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: [".fr"]
 *                       alpha2Code:
 *                         type: string
 *                         example: "FR"
 *                       alpha3Code:
 *                         type: string
 *                         example: "FRA"
 *                       callingCodes:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["33"]
 *                       capital:
 *                         type: string
 *                         example: "Paris"
 *                       altSpellings:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["FR", "French Republic", "République française"]
 *                       subregion:
 *                         type: string
 *                         example: "Western Europe"
 *                       region:
 *                         type: string
 *                         example: "Europe"
 *                       population:
 *                         type: integer
 *                         example: 67000000
 *                       latlng:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [46.0, 2.0]
 *                       demonym:
 *                         type: string
 *                         example: "French"
 *                       area:
 *                         type: number
 *                         example: 551695
 *                       timezones:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["UTC+01:00"]
 *                       borders:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: ["BEL", "DEU", "ITA", "ESP"]
 *                       nativeName:
 *                         type: string
 *                         example: "France"
 *                       numericCode:
 *                         type: string
 *                         example: "250"
 *                       flags:
 *                         type: object
 *                         properties:
 *                           svg:
 *                             type: string
 *                             example: "https://flagcdn.com/fr.svg"
 *                           png:
 *                             type: string
 *                             example: "https://flagcdn.com/fr.png"
 *                       currencies:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             code:
 *                               type: string
 *                               example: "EUR"
 *                             name:
 *                               type: string
 *                               example: "Euro"
 *                             symbol:
 *                               type: string
 *                               example: "€"
 *                       languages:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             iso639_1:
 *                               type: string
 *                               example: "fr"
 *                             iso639_2:
 *                               type: string
 *                               example: "fra"
 *                             name:
 *                               type: string
 *                               example: "French"
 *                             nativeName:
 *                               type: string
 *                               example: "Français"
 *                       translations:
 *                         type: object
 *                         properties:
 *                           br:
 *                             type: string
 *                           pt:
 *                             type: string
 *                           nl:
 *                             type: string
 *                           hr:
 *                             type: string
 *                           fa:
 *                             type: string
 *                           de:
 *                             type: string
 *                           es:
 *                             type: string
 *                           fr:
 *                             type: string
 *                           ja:
 *                             type: string
 *                           it:
 *                             type: string
 *                           hu:
 *                             type: string
 *                         example:
 *                           fr: "France"
 *                           es: "Francia"
 *                           de: "Frankreich"
 *                       flag:
 *                         type: string
 *                         example: "https://flagcdn.com/fr.png"
 *                       regionalBlocs:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             acronym:
 *                               type: string
 *                               example: "EU"
 *                             name:
 *                               type: string
 *                               example: "European Union"
 *                       cioc:
 *                         type: string
 *                         example: "FRA"
 *                       independent:
 *                         type: boolean
 *                         example: true
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     summary: Get country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Country ID
 *     responses:
 *       200:
 *         description: A single country
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "66508c285d3db5cf82f84acd"
 *                 name:
 *                   type: string
 *                   example: "France"
 *                 topLevelDomain:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: [".fr"]
 *                 alpha2Code:
 *                   type: string
 *                   example: "FR"
 *                 alpha3Code:
 *                   type: string
 *                   example: "FRA"
 *                 callingCodes:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["33"]
 *                 capital:
 *                   type: string
 *                   example: "Paris"
 *                 altSpellings:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["FR", "French Republic", "République française"]
 *                 subregion:
 *                   type: string
 *                   example: "Western Europe"
 *                 region:
 *                   type: string
 *                   example: "Europe"
 *                 population:
 *                   type: integer
 *                   example: 67000000
 *                 latlng:
 *                   type: array
 *                   items:
 *                     type: number
 *                   example: [46.0, 2.0]
 *                 demonym:
 *                   type: string
 *                   example: "French"
 *                 area:
 *                   type: number
 *                   example: 551695
 *                 timezones:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["UTC+01:00"]
 *                 borders:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["BEL", "DEU", "ITA", "ESP"]
 *                 nativeName:
 *                   type: string
 *                   example: "France"
 *                 numericCode:
 *                   type: string
 *                   example: "250"
 *                 flags:
 *                   type: object
 *                   properties:
 *                     svg:
 *                       type: string
 *                       example: "https://flagcdn.com/fr.svg"
 *                     png:
 *                       type: string
 *                       example: "https://flagcdn.com/fr.png"
 *                 currencies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: string
 *                         example: "EUR"
 *                       name:
 *                         type: string
 *                         example: "Euro"
 *                       symbol:
 *                         type: string
 *                         example: "€"
 *                 languages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       iso639_1:
 *                         type: string
 *                         example: "fr"
 *                       iso639_2:
 *                         type: string
 *                         example: "fra"
 *                       name:
 *                         type: string
 *                         example: "French"
 *                       nativeName:
 *                         type: string
 *                         example: "Français"
 *                 translations:
 *                   type: object
 *                   properties:
 *                     br:
 *                       type: string
 *                       example: "France"
 *                 flag:
 *                   type: string
 *                   example: "https://flagcdn.com/fr.png"
 *                 regionalBlocs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       acronym:
 *                         type: string
 *                         example: "EU"
 *                       name:
 *                         type: string
 *                         example: "European Union"
 *                 cioc:
 *                   type: string
 *                   example: "FRA"
 *                 independent:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Country not found
 */
