# QA report — V1.0 development build

## Actually performed

- Read and implemented the provided master specification (22 sections).
- Checked official TfL API catalogue, anonymous quota (50 requests/minute), public Darwin JSON LDBWS documentation and its OpenAPI specification, including departure-board-with-details endpoint, `generatedAt`, operator/calling point fields, and Basic authentication. Confirmed Heathrow CRS mapping from published station references. Documentation review is not live endpoint verification.
- JavaScript syntax validation of all production modules, service worker and optional Worker: **PASS**.
- Isolated logic suite (`tests/unit.js`, executed with a minimal DOM shim in the development environment): **14/14 PASS**. Covers countdown, expiry, missing timestamp, midnight rollover, unknown delay, distinction between arrival/departure, separate commute profiles, settings validation and round trip, credential-bearing URL rejection, Heathrow Express operator filtering and cancellation.
- Chromium at simulated mobile dimensions: **BLOCKED** by the execution environment's localhost policy. It did not load the app, so no browser visual or interaction pass is claimed. Direct outbound request to TfL was also blocked by DNS/network restrictions. CORS header testing could not be completed. No physical iPhone or National Rail credentials available. No deployed GitHub Pages URL available.

## Required acceptance tests after deployment

| Area | Test | Status |
|---|---|---|
| Safari | 320, 390 and 440 CSS px, portrait/landscape, enlarged text, touch and keyboard | Pending |
| PWA | Add to Home Screen, standalone launch, safe areas, offline launch after first load, cache updates | Pending |
| TfL | Compare actual arrival boards and status with official information on Elizabeth, Jubilee, Northern | Pending |
| TfL | CORS from the actual Pages origin; anonymous requests and rate limit behaviour | Pending |
| Darwin | Authenticate Worker, verify CORS and real PAD/HXX/HWV departures, HX operator, calling points, cancellation | Pending credentials and deployment |
| Data | Missing platform, empty predictions, expired prediction, timeouts, 401/403/429/500, stale timestamp and offline/reconnect | Logic partly tested; integration pending |
| Map | Route topology, station coordinates, touch pan/zoom, next-stop markers, expired data removal | Pending |
| Journey | Leave now, arrive by, last journey, midnight and DST, interchange filters, HEX identification | Pending |
| Settings | Card creation/edit/reorder/delete, independent profiles, export/import/reset, theme persistence | Logic partly tested; UI pending |
| Alerts | Foreground threshold and quiet hours, duplicate disruption avoidance | Pending |
| Web Push | Registration, remote monitoring, delivery, unsubscribe | Not implemented; service worker handlers only |
| Security | No private credentials in frontend, reject unauthenticated proxy, rate limit, exact origin, upstream bounds | Static review; deployed tests pending |

## Release gate

Treat this as a development build, not a verified production release. Four-line live coverage is incomplete until authenticated Darwin access has been confirmed. See README for functional limitations, including live journey recalculation, automatic walking routing, push and precise train position. The application must never be used as a guaranteed last-train or connection authority.

## Run isolated browser tests yourself

After uploading to GitHub Pages, open `https://YOUR-HOST/YOUR-REPO/tests/` in the browser. It displays the test results; its artificial fixtures are isolated from the actual application. No development tools are required to run the app or this test page.
